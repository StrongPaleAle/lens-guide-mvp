export interface responsiveImage {
    srcSet: string
    webpSrcSet: string
    sizes: string
    src: string
    width: number
    height: number
    aspectRatio: number
    alt: string | null
    title: string | null
    bgColor: string | null
    base64: string | null
}
export interface ProductPartOption {
    name: string
    sku: string
}
export interface ProductPart {
    name: string
    options: ProductPartOption[]
        
};

export interface SceneImage {
    lensType: string
    lensColor: string
    image: {
        id: string
        responsiveImage: responsiveImage
    }
}
export interface ProductScene {
    sceneName: string
    nakedEyeImage: {
        id: string
        responsiveImage: responsiveImage
    }
    sceneImages: {
        [propName: string]: SceneImage
    }
}
export interface Product {
    id: string
    name: string
    sku: string
    parts: ProductPart[]
};
  