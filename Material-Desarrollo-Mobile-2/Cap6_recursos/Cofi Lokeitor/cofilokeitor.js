var icono = new H.map.Icon("images/coffePin128.png");
var i1 = document.getElementById("cafe01");
var i2 = document.getElementById("cafe02");
var i3 = document.getElementById("cafe03");
var i4 = document.getElementById("cafe04");

//DECLARAR UNA FUNCIÓN QUE SE OCUPA DE CENTRAR EL MAPA
function centrarMapa(map){
    map.setCenter({lat:-34.603722,
                    lng:-58.381592});
    map.setZoom(18);
    }
    
document.addEventListener("DOMContentLoaded", function() {

        //DECLARAR EL OBJETO MAP Y SETEARLO PARA QUE FUNCIONE
        var platform = new H.service.Platform({
        app_id: 'INSERTA_AQUI_TU_APP_ID',
        app_code: 'INSERTA_AQUI_TU_APP_CODE'
        });
        var pixelRatio = window.devicePixelRatio || 1;
        var defaultLayers = platform.createDefaultLayers({
            tileSize: pixelRatio === 1 ? 256 : 512, ppi: pixelRatio === 1 ? undefined : 1024});

        var map = new H.Map(document.getElementById('map'), 
                defaultLayers.normal.map, {pixelRatio: pixelRatio});
        var ui = H.ui.UI.createDefault(map, defaultLayers, 'es-ES');
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        centrarMapa(map);

    //HARDCODING de la ubicación de cada cafetería que deseamos mostrar
        //CAFETERIA 01
        i1.addEventListener("click", function() {
                la = -34.633787;
                lo = -58.410958;
                var pin = new H.map.Marker({ lat:  la , lng:  lo  }, { icon: icono });
                map.addObject(pin);
                map.setCenter({ lat:  la , lng:  lo  });
            })

        //CAFETERIA 02
        i2.addEventListener("click", function() {
            la = -34.635681;
            lo = -58.424454;
            var pin = new H.map.Marker({ lat:  la , lng:  lo  }, { icon: icono });
            map.addObject(pin);
            map.setCenter({ lat:  la , lng:  lo  });
        })
        //CAFETERIA 03
        i3.addEventListener("click", function() {
            la = -34.631623;
            lo = -58.441554;
            var pin = new H.map.Marker({ lat:  la , lng:  lo  }, { icon: icono });
            map.addObject(pin);
            map.setCenter({ lat:  la , lng:  lo  });
        })
        //CAFETERIA 04
        i4.addEventListener("click", function() {
            la = -34.633548;
            lo = -58.460436;
            var pin = new H.map.Marker({ lat:  la , lng:  lo  }, { icon: icono });
            map.addObject(pin);
            map.setCenter({ lat:  la , lng:  lo  });
        })
    });