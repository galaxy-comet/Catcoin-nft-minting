import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "build/Build/build.loader.js",
    dataUrl: "build/Build/build.data",
    frameworkUrl: "build/Build/build.framework.js",
    codeUrl: "build/Build/build.wasm",
    streamingAssetsUrl: "build/StreamingAssets",
});

export default function BuyLand() {
    return (
        <>
            <Unity
                unityContext={unityContext}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </>
    );
}
