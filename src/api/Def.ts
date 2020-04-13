
enum LogType {
  CastSkill = '15',
  GainEffect = '1A',
  LoseEffect = '1E',
  Status = '27'
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

//YOU gains the effect of 激情咏唱 from YOU for 15.00 Seconds.
//YOU loses the effect of 激情咏唱 from YOU.

class Effect{
  type: string;
  encounterId: string;
  rawText: string;
  encounterName: string;
  skillName: string;
  combatantName: string;
  duration: Number;

  constructor(content: string[]) {
    this.type = content[0];
    this.encounterId = content[1];
    this.rawText = content[2];
    
    const result = this.rawText.split(' ');
    this.encounterName = result[0];
    this.skillName = result[5];
    this.combatantName = result[7];
    switch (result[1]) {
      case 'gains':
        this.duration = Number(result[9]);
        break;
    
      case 'loses':
        this.duration = 0;
        break;
      
      default:
        this.duration = 0;
        break;
    }
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

export { LogType,CastSkill, Effect,Status};