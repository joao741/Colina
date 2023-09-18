        function abrir()
        {
            var menu = document.getElementById("menu-principal");
            menu.style.display = "flex";

            var botao = document.getElementById("botao-abrir");
            botao.style.display = "none";
        }

        function fechar()
        {
            var menu = document.getElementById("menu-principal");
            menu.style.display = "none";

            var botao = document.getElementById("botao-abrir");
            botao.style.display = "block";
        }