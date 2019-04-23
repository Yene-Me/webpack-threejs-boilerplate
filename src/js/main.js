import * as THREE from 'three'
import AbstractApplication from 'views/AbstractApplication'
import shaderVert from 'shaders/custom.vert'
import shaderFrag from 'shaders/custom.frag'

class Main extends AbstractApplication {
  constructor () {
    super()

     const texture = new THREE.TextureLoader().load('static/textures/crate.gif')

    const geometry = new THREE.BoxGeometry(200, 200, 200)
    const material = new THREE.MeshBasicMaterial({ map: texture })

    const material2 = new THREE.ShaderMaterial({
      vertexShader: shaderVert,
      fragmentShader: shaderFrag
    })

    this.scene.add(new THREE.HemisphereLight(0x606060, 0x404040))

    const light = new THREE.DirectionalLight(0xffffff)
    light.position.set(1, 1, 1).normalize()
    this.scene.add(light)

    this._mesh = new THREE.Mesh(geometry, material)
    this._scene.add(this._mesh)

    var size = 400;
    var divisions = 20;

    var gridHelper = new THREE.GridHelper( size, divisions );
        gridHelper.position.y = -100;
		    gridHelper.position.x = 0;
    this._scene.add( gridHelper );

    var polarGridHelper = new THREE.PolarGridHelper( 200, 16, 8, 64, 0x0000ff, 0x808080 );
				polarGridHelper.position.y = - 150;
        polarGridHelper.position.x = 0;
        
		this._scene.add( polarGridHelper );



    this.animate()
  }
}

export default Main
