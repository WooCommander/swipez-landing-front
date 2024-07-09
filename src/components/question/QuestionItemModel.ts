export default class QuestionItemModel {
  Id: string="";
  Question: string="";
  Answer: string = "";
  Visible: boolean = false;

  constructor(obj: Partial<QuestionItemModel>) { 
    Object.assign(this, obj);
    
  }
  
}
