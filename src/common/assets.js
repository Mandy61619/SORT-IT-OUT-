export const ASSET_KEYS = Object.freeze({
  BACKGROUND: 'BACKGROUND',
  OBJECTS: 'OBJECTS',
  JAR: 'JAR',
  JAR_DEAD: 'JAR_DEAD ',
});

export const IMAGE_ASSETS = [
  {
    assetKey: ASSET_KEYS.BACKGROUND,
    path: 'assets/images/background.png',
  },
  {
    assetKey: ASSET_KEYS.JAR,
    path: 'assets/images/jar.png',
  },
  {
   assetKey: ASSET_KEYS.JAR_DEAD,
    path: 'assets/images/jar-dead.png', 
  },
];

export const TEXTURE_ATLAS_ASSETS = [
  {
    assetKey: ASSET_KEYS.OBJECTS,
    textureURL: 'assets/images/spritesheet.png',
    atlasURL: 'assets/images/spritesheet.json',
  },
];
