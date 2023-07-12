AFRAME.registerComponent("flying-birds",{
    init:function(){
        for(var i=1;i <= 20; i++){
            //id for birds
            id = `huddle${i}`

            //positions
            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + -1000);

            var position = {
                x:posX,
                y:posY,
                z:posZ
            }

            this.flyingBird(id,position)
        }
    },

    tick:function(){
        

        birdEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        birdEl.setAttribute("animation-mixer",{})
        
    }
})