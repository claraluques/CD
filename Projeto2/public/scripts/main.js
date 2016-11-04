
// Initialize Firebase
    var config = {
      apiKey: "AIzaSyBc2hOcNxqzqxEkcUmonDmLzRZo08LWmqE",
      authDomain: "projeto-2-cvw.firebaseapp.com",
      databaseURL: "https://projeto-2-cvw.firebaseio.com",
      storageBucket: "projeto-2-cvw.appspot.com",
      messagingSenderId: "599139925553"
    };
    firebase.initializeApp(config);

  database = firebase.database();

  logs = this.database.ref('logs');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}

