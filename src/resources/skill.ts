
export enum jobs {
  PLD = '骑士',
  WAR = '战士',
  DRK = '暗黑骑士',
  GNB = '绝枪战士',
  WHM = '白魔法师',
  SCH = '学者',
  AST = '占星术士',
  DRG = '龙骑士',
  MNK = '武僧',
  NIN = '忍者',
  SAM = '武士',
  BRD = '吟游诗人',
  MCH = '机工士',
  DNC = '舞者',
  BLM = '黑魔法师',
  RDM = '赤魔法师',
  SMN = '召唤师',
  BLU = '青魔法师',
};

export enum selfBuff {
  //DRG
  RightEye = '巨龙右眼',

  //BLM
  Thundercloud = 0xa4,
  Firestarter = 0xa5,
}

export enum enemyDebuff {
  //SCH
  ChainStratagem = 0x04c5,
  //NIN
  IncreasesDamage = '受伤加重',
}

//eg: DoTs
export enum enemyDebuffBySelf {
  Dim = 0x74f
}

export enum teamBuff {
  //AST
  Arrow = 0x75c,
  Balance = 0x75a,
  Bole = 0x75b,
  Ewer = 0x75e,
  Spear = 0x75d,
  Spire = 0x75f,
  LadyOfCrowns = 0x755,
  LordOfCrowns = 0x754,
  Divination = 0x756,
  //DRG
  BattleLitany = 0x312,
  LeftEye = 0x4a0,
  //MNK
  Brotherhood = 0x49e,

  //BRD
  /*
  BattleVoice: '战斗之声',
  Ballad: '贤者的叙事谣',
  Paeon: '军神的赞美歌',
  Minuet: '放浪神的小步舞曲',
  */
  //DNC
  StandardFinish = 0x71d,
  TechnicalFinish = 0x71e,
  Devilment = 0x721,
  Esprit1 = 0x737, //标准伶俐
  Esprit2 = 0x738,//技巧伶俐
  
  //RDM
  Embolden = 0x4d7,
  //SMN
  Devotion = 0x4bd,
}
