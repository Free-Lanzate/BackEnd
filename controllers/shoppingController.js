const db = require("../models");
const ShoppingSession = db.ShoppingSession
const CartItem = db.CartItem

const Op = db.Sequelize.Op;

/**
 * Al crear un usuario con User.create({}), se crea tambien'
 * la sesion de carrito que le pertence. Esto no sucede con los seeders
 * pues los seeders son directamente queries sobre la Base de datos y no hacen uso
 * de create o bulkCreate.
 * 
 */

/**
 * shoppingSessionController tiene las funciones correspondientes
 * a dos modelos, cartItem y shoppingSession
 */


/**
 * 
 * Supongamos que en frontend se quiere anadir un item al carrito.
 * Esto usualmente ocurrira desde la pagina del item con un boton.
 * Lo que hace esta funcion es crear el item de carrito y al mismo tiempo
 * anadirlo a la sesion de compra del usuario.
 * 
 * Por lo tanto, recibe:
 * @userId
 * @postId
 * item de carrito (que tiene la propiedad de cantidad) y le anade la fk de la shoppingSession.
 * 
 */


 exports.addItemToSession = async (req, res) => {

    const currentUserId = req.body.userId;
    const currentPostId = req.body.postId;

    //Se busca la sesion del user

    const userShoppingSession = await ShoppingSession.findOne(
        {
            where: {
                userId: currentUserId
            }
        }
    );

    const sessionId = userShoppingSession.id
    
    //Se crea el item de carrito y se anada a la sesion

    CartItem.create(
        {
            quantity: 1,
            sessionId: sessionId,
            postId: currentPostId
        }
    ).then(data => {
        //Retornada el id del cartItem en data.id
        res.send(data);
    })
        .catch(err => {
            res.status(400).send({
                message:
                    err.message || "Some error occurred while adding the item."
            });
        });
}

/**
 * 
 * Modifica la cantidad de un item ya anadido al carrito.
 * Toma la cantidad a setear y la id del cartItem (que ya fue creado al anadirse al carrito)
 * 
 * Recordatorio:
 * Modificar la cantidad de items deberia modificar el total de la orden del carrito
 *
 */

 exports.changeItemQuantity = async (req, res) => {

    const cartItemId = req.body.cartItemId;
    const newQuantity = req.body.newQuantity;

    const cartItem = await CartItem.findOne(
        {
            where: {
                id: cartItemId
            }
        }
    );

    cartItem.quantity = newQuantity;
    await cartItem.save().then(
        data => {
            res.send(data);
        })
            .catch(err => {
                res.status(400).send({
                    message:
                        err.message || "Some error occurred while modifying the item quantity."
                });
            });
}

/**
 * 
 * Dado el id (como parametro) de un CartItem, se remueve su registro de la base de datos. Esto deberia ser suficiente para
 * la funcionalidad de remover del carrito.
 *
 */

 exports.removeCartItem = async (req, res) => {

    const cartItemId = req.params.cartItemId;
    
    const cartItem = await CartItem.findOne(
        {
            where: {
                id: cartItemId
            }
        }
    );
    await cartItem.destroy().then(
        data => {
            res.send(data);
        })
            .catch(err => {
                res.status(400).send({
                    message:
                        err.message || "Some error occurred while modifying the item quantity."
                });
            });
}

/**
 * 
 * utility function
 * Obtiene el id de la sesion de carrito de un user. Por si es necesario.
 * 
 */

 exports.getShoppingIdByUser = async (req, res) => {

    const currentUserId = req.param.userId;

    //Se busca la sesion del user

    ShoppingSession.findOne(
        {
            where: {
                userId: currentUserId
            }
        }
    ).then(
        data => {
            //Envio todo, pero la sesionId esta en data.userId
            res.send(data);
        })
            .catch(err => {
                res.status(400).send({
                    message:
                        err.message || "Some error occurred while getting the shopping session."
                });
            });


 }


/**
 * Obtiene todos los items en una sesion de carrito junto a la informacion del post y del freelancer.
 * Recibe el id del User, si es posible usar la sesion de usuario seria mas rapido. Hay que ver como
 * se haria en la parte de front.
 */

 exports.getShoppingSessionItems = async (req, res) => {

    const currentUserId = req.params.id;

    const userShoppingSession = await ShoppingSession.findOne(
        {
            where: {
                userId: currentUserId
            }
        }
    );

    await CartItem.findAll({
        where: {
            sessionId: userShoppingSession.id
        },     
        include: [{
            model: db.Post,
            attributes: ['postTitle', 'postPrice'],
            required: true,
            include: {
                model: db.Freelancer,
                attributes: ['freelancerRating'],
                required: true,
                include: {
                    model: db.User,
                    attributes: ['username', 'firstName', 'lastName'],
                    required: true,
                }
            }
        }
        ]
    }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the cartItems."
        });
      });

 
}



/**
 * 
 * Por hacer:
 * - Resolver el tema de calcular totales de carrito.
 * - Permitir que un usuario solo anada una instancia de post al carrito, si ya existe, que no haga nada o, que cambie la cantidad de ese item
 * - Una vez que se termine el proceso de pago, pasar los items a una orden y limpiar el carrito.
 * - Conectar el proceso de pago con alguna pasarela de pago.
 */