import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {mode, _path, isDev} = options;

    const result = {
        mode,
        entry: _path.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: _path.build,
            clean: true,
        },
        plugins: buildPlugins(_path.html),
        module: {
            strictExportPresence: true,
            rules:
                buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }

    return result;
}
