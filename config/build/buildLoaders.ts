import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes('.module.'),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    }
                },
            },
            "sass-loader",
        ],
    };
    // const cssLoader = () => {
    //     return {
    //         oneOf: [
    //             {
    //                 test: /\.css$/,
    //                 include: /node_modules/,
    //                 use: [
    //                     'style-loader',
    //                     {
    //                         loader: 'css-loader',
    //                         options: {
    //                             modules: false,
    //                         },
    //                     },
    //                 ],
    //             },
    //             {
    //                 test: /\.(css|scss)$/,
    //                 use: [
    //                     'style-loader',
    //                     {
    //                         loader: 'css-loader',
    //                         options: {
    //                             modules: {
    //                                 auto: (resourcePath: string) => resourcePath.includes('.scss'),
    //                                 localIdentName: isDev
    //                                     ? '[hash:base64:6]'
    //                                     : '[name]_[local]__[hash:base64:6]',
    //                             },
    //                         },
    //                     },
    //                     {
    //                         loader: 'sass-loader',
    //                         options: {
    //                             sourceMap: true,
    //                         },
    //                     },
    //                 ],
    //             },
    //         ],
    //     };
    // }


    return [tsLoader, cssLoader]
}
