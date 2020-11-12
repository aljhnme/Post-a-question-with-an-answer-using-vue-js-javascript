new Vue({

el:"#app-qustion",
  data() {
   return {
      input: {
        question: "",
        val_answer:"",
        answer:""
     },
      show_answer_in_html:"",
      text_mass_not_question:"",
      shhi:false,
      massg_delete_Storage_all:""
   }
 },

methods:{
  val_question:function()
  {
   if (this.input.question == "" || this.input.val_answer == "") 
    {
      this.massg_delete_Storage_all='Please add a field to the text';
    }else{

      window.localStorage.setItem(this.input.question,this.input.val_answer);
      this.massg_delete_Storage_all='The question and answer has been inserted into local storage';
    }

  },
  show_answer:function()
  {   
    
    var v_answer=localStorage.getItem(this.input.answer);

    if (this.input.answer == "")
    { 
       this.shhi=true;
       this.text_mass_not_question="";
    }else{

      this.shhi=false;
  if (localStorage.getItem(this.input.answer) === null) 
      {
        this.text_mass_not_question="This question does not exist in your browser s local private storage";
      }else{
        this.text_mass_not_question='';
        this.show_answer_in_html=v_answer;
        $('#exampleModal').modal('show');
      }
     }
    },

    clear_all:function()
    {
       localStorage.clear();
       this.massg_delete_Storage_all="All local storage data has been deleted";
    }

   }
 });