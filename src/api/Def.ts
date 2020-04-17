/**
 * Define File for ngld overlay
 */



class Base{
  [key: string]: any;
  type: number;
  time: Date;
  constructor(content: string[]) {
    this.type = Number(content[0]);
    this.time = new Date(Date.parse(content[1]));
  }

  toHex(text: string): number{
    return parseInt(text, 16);
  }
}

export class CastSkill extends Base{
  combatantId: number;
  combatantName: string;
  skillId: number;
  skillName: string;
  encounterId: number;
  encounterName: string;

  constructor(content: string[]) {
    super(content);
    this.combatantId = this.toHex(content[2]);
    this.combatantName = content[3];
    this.skillId = this.toHex(content[4]);
    this.skillName = content[5];
    this.encounterId = this.toHex(content[6]);
    this.encounterName = content[7];
  }
}
export class Buff extends Base {

  skillId: number;
  skillName: string;
  duration: number;
  combatantId: number;
  combatantName: string;
  encounterId: number;
  encounterName: string;

  constructor(content: string[]) {
    super(content);
    this.skillId = this.toHex(content[2]);
    this.skillName = content[3];
    this.duration = Number(content[4]);
    this.combatantId = this.toHex(content[5]);
    this.combatantName = content[6];
    this.encounterId = this.toHex(content[7]);
    this.encounterName = content[8];
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