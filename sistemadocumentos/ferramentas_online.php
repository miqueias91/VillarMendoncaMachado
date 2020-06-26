<?php
  $acao = $_POST['acao'];
  $expedicao = date('d/m/Y');
  $doc_origem = 'NASC. LV-138 FL129';
  $cidade_origem = $_POST['cidade_origem'];
  $estado_origem = $_POST['estado_origem'];
  $cpf = $_POST['cpf'];
  $rg = $_POST['rg'];
  $nasc = $_POST['nasc'];
  $nome_titular = $_POST['nome_titular'];
  $sexo = $_POST['sexo'];
  $nome_mae = $_POST['nome_mae'];
  $nome_pai = $_POST['nome_pai'];
  $cidade = $_POST['cidade'];
  $estado = $_POST['estado'];
?>

    <canvas id='documento' width='600' height='700' style='padding: 0;margin: auto;display: block;position: absolute;top: 0;bottom: 0;left: 0;right: 0;'>
      Seu navegador não suporta canvas.
    </canvas>

    <script type='text/javascript'>
      var expedicao = '<?=$expedicao?>';
      var cpf = '<?=$cpf?>';
      var rg = '<?=$rg?>';
      var doc_origem = '<?=$doc_origem?>';
      var cidade_origem = '<?=$cidade_origem?>';
      var estado_origem = '<?=$estado_origem?>';

      var nome_titular = '<?=$nome_titular?>';
      var nasc = '<?=$nasc?>';
      var sexo = '<?=$sexo?>';
      var nome_mae = '<?=$nome_mae?>';
      var nome_pai = '<?=$nome_pai?>';
      
      var cidade = '<?=$cidade?>';
      var estado = '<?=$estado?>';

      function carregarContextoCanvas(idCanvas){
        var elemento = document.getElementById(idCanvas);
        if(elemento && elemento.getContext){
          var contexto = elemento.getContext('2d');
          if(contexto){
            return contexto;
          }
        }
        return false;
      }


      window.onload = function(){
         var ctx = carregarContextoCanvas('documento');
         if(ctx){
            var img_doc = new Image();
            var img_foto = new Image();
            img_doc.src = 'documentos/rg.jpg';
            if (sexo == 'F') {
              img_foto.src = 'documentos/rosto_feminino.jpg';
            }
            else{
              img_foto.src = 'documentos/rosto_feminino.jpg';
            }

            img_doc.onload = function(){
              ctx.drawImage(img_doc, 10, 10, 550, 700);
              ctx.font = '15px Arial';
              ctx.fillStyle = '#808080';
              ctx.fillText(rg.toUpperCase(), 100, 420);
              ctx.fillText(expedicao, 380, 410);//EXPEDICAO
              ctx.fillText(nome_titular.toUpperCase(), 60, 450);//TITULAR
              ctx.fillText(nome_pai.toUpperCase(), 60, 490);//FILIACAO
              ctx.fillText(nome_mae.toUpperCase(), 60, 505);//FILIACAO
              ctx.fillText(cidade.toUpperCase()+'-'+estado.toUpperCase(), 60, 560);//NATURALIDADE
              ctx.fillText(nasc, 380, 550);//NASCIMENTO
              ctx.fillText(doc_origem.toUpperCase(), 140, 580);//DOC ORIGEM
              ctx.fillText(cidade_origem.toUpperCase()+'-'+estado_origem.toUpperCase(), 60, 600);//CIDADE DOC ORIGEM
              ctx.fillText(cpf, 60, 640);//CPF
              ctx.fillText('1. VIA', 480, 640);

              ctx.drawImage(img_foto, 280, 112, 209, 140);
            }
         }
      }
    </script>