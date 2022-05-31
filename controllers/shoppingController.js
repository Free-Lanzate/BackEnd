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

    const userShoppingSession = ShoppingSession.findOne(
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
        res.send(data);
    })
        .catch(err => {
            res.status(400).send({
                message:
                    err.message || "Some error occurred while adding the item."
            });
        });
}
exports.changeItemQuantity = (req, res) => {
}
