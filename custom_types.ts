let drawPoint = (point: {x:number, y: number}) => {  //en lugar de pasar muchos parámetros, mejor pasamos un objeto

}

drawPoint({
    x:1,
    y:2
})

//interfaces Pascal Naming convention
interface Point { //estoy definiendo la forma de un objeto
    x: number,
    y: number,
  
}
let betterPoint =(point: Point) =>  {
console.log(`${point.x + "resultado es " + point.y}}`);

}
betterPoint({
    x: 7,
    y: 2,
})

//anteriormente violamos el principio de cohesión porque tenemos una interfaz y la función abajo SEPARADAS

/* aquí entramos con la Classes: grupos variables(propiedades) y funciones(métodos) que están altamente relacionados */
//y ya es una Clase, no una interfazx
class Points { //podemos tener un constructor que será llamado cuando queramos obtener instancia de mi clase
    /* private x: number; //field los quitamos y en el constructor lo implementamos
    private y: number; */

    draw() {   //método
        console.log("X: " + this._x + ' Y: ' + this._y);
    }

    //para acceder a los campos x, y, se crea un método
    get x() {  //getX pasa a get X y se vuelve un campo
        return this._x;
    }
    //si quisiera sólo dar permisos de lectura, comento el get, si quiero dejar que se modifique, le doy al set
    set x(value){ //nuevo valor para el campo x
        if(value <0)
            throw new Error('Value cannot be less than 0')
        
        this._x = value
    }

     constructor(private _x?: number, private _y?: number){
     /*    this.x = x; //ypodemos quitar esto también
        this.y = y; */
    }
}
//instanciamos, creando objeto
//modificadores de acceso, palabra clave que aplicamos a un miembro de la clase, para controlar su acceso desde afuera
//- public -private -protected
let point = new Points(1,2);
let x = point.x //nos da el valor actual de X
point.x = 6;
point.draw();

//en Typescript no podemos tener múltiples constructores, pero cuando usamos un constructor, podemos establecer que los parámetros a ingresar serán opcionales

//modulos

//ponemos la clase en otro modulo y antes la palabra 'export'
//instanciamos en otro módulo import { Point, a, b, c } from './points'