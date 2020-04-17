
enum LogType {
  CastSkill = '21',
  GainEffect = '26',
  LoseEffect = '30',
  ToggleBattleMode = '31',//战斗状态
  Status = '39',
  ACTInfo = '251',
}

class Base{
  [key: string]: any;
  type: string;
  time: Date;
  constructor(content: string[]) {
    this.type = content[0];
    this.time = new Date(Date.parse(content[1]));
  }

  apply(content: string[]) {
    Object.keys(this).forEach((v, i) => this[v] = content[i]);
  }
}

class CastSkill{
  type: string;
  combatantId: string;
  combatantName: string;
  skillId: string;
  skillName: string;
  encounterId: string;
  encounterName: string;

  constructor(content: string[]) {
    this.type = content[0];
    this.combatantId = content[1];
    this.combatantName = content[2];
    this.skillId = content[3];
    this.skillName = content[4];
    this.encounterId = content[5];
    this.encounterName = content[6];
  }
}
class Buff extends Base {

  skillId: string='';
  skillName: string='';
  duration: string|number='';
  encounterId: string='';
  encounterName: string='';
  combatantId: string='';
  combatantName: string = '';
  
  constructor(content: string[]) {
    super(content);
    
    this.apply(content);

    this.duration = Number(this.duration);
  }
}

class Status {
  type: string;
  combatantId: string;
  combatantName: string;
  HP: string;
  MaxHP: string;
  MP: string;
  MaxMP: string;
  TP: string;
  MaxTP: string;

  constructor(content: string[]) {
    this.type = content[0];
    this.combatantId = content[1];
    this.combatantName = content[2];
    this.HP = content[3];
    this.MaxHP = content[4];
    this.MP = content[5];
    this.MaxMP = content[6];
    this.TP = content[7];
    this.MaxTP = content[8];
  }
}

export { LogType,CastSkill, Buff,Status};