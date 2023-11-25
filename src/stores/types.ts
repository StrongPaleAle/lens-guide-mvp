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
export interface ProductPart {
    name: string
    options: [
        {
        name: string
        sku: string
        }
    ]
};
export interface ProductScene {
    sceneName: string
    nakedEyeImage: {
        id: string
        responsiveImage: responsiveImage
    }
    sceneImage: {
        lensType: string
        lensColor: string
        image: {
            id: string
            responsiveImage: responsiveImage
        }
        
    }
}
export interface Product {
    parts: ProductPart[]
};
  