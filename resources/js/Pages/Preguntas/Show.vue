<script>
import Layout from './../../Layouts/GuestLayout.vue';

export default {
  layout: Layout,
}
</script>

<template>
    <div class="max-w-[800px] mx-auto space-y-7">
        <section>
            <h2>Horarios de atención</h2>
            <ul class="list-disc">
                <li>Lunes a viernes de 10:00 a 18:00.</li>
                <li>Sábados de 09:00 a 13:00</li>
                <li>No trabajamos domingos ni feriados, en caso de necesitar algo con urgencia, escribir por WhatsApp indicándonos lo que necesitas, pero no aseguramos la respuesta en el momento. </li>
            </ul>
        </section>
        <section>
            <h2>¿En qué tamaño se envían los archivos?</h2>
            <p>
                <strong>Kits imprimibles: </strong>Enviamos los archivos a tu dirección de correo electrónico en formato PDF y tamaño A4 (21x29,7cm), a menos que solicites el tamaño A3. Los archivos se abren utilizando Adobe Acrobat Reader, que se encuentra disponible en todas las computadoras y es GRATUITO. Vas a recibir un archivo con INSTRUCCIONES sobre el tipo de papel recomendado para cada elemento a imprimir. Al tener los archivos en tu correo electrónico, no tienen fecha de caducidad, por lo que podés utilizarlos en cualquier momento. En cuanto a los afiches de bienvenida son los únicos que van en ambos tamaños A4 y A3, no lo enviamos en otros tamaños, ante cualquier duda consultar antes de comprar.
            </p>
            <p>
                <strong>Invitación fija (estática):</strong> Formato PNG.
            </p>
            <p>
                <strong>Invitación interactiva (botones):</strong> Formato PDF.
            </p>
            <p>
                <strong>Invitación animada(video):</strong> Formato MP4.
            </p>
        </section>
        <section>
            <h2>¿Cuál es el costo de envío?</h2>
            <p>El envío es <strong>GRATUITO</strong>.</p>
            <p>Para <strong>kits imprimibles</strong> los archivos se envían por mail, en caso de necesitarlo por WhatsApp, por favor aclararlo al momento de la confirmación de la compra.</p>
            <p>Para <strong>invitaciones digitales</strong>, el archivo se enviará por mail y por WhatsApp, es responsabilidad del cliente guardar el archivo, no podemos reenviarlo después de 48hs de haberlo hecho ya que manejamos un gran volumen de archivos y nos resulta imposible tenerlos a todos guardados, es probable que luego de una semana su archivo ya no exista en nuestra base y cualquier cambio implicaría hacerla nuevamente. Por favor tenga esto en cuenta antes de pasar los datos del evento. Si no está seguro de la fecha y horario, puede dejar pendiente la creación de esta para el momento adecuado, se puede abonar con anticipación para reservar precio 😉.</p>
        </section>
        <section>
            <h2>¿Cómo se realizan los envíos?</h2>
            <p>Por mail a la cuenta que nos indiques en el mail de confirmación.</p>
            <p>Las invitaciones también se enviarán por WhatsApp para que puedas compartirla en el momento.</p>
        </section>
        <section>
            <h2>¿Cuánto tarda en llegar mi pedido?</h2>
            <p>Si se trata de un kit personalizado, el plazo es 48 horas desde el momento en que nos envías los datos para editarlo. Los kits sin personalizar se envían normalmente en el día.</p>
            <p>Si lo necesitas urgente por favor escribinos por whatsapp para ver si tenemos disponibilidad de envío.</p>
        </section>
        <section>
            <h2>¿Se pueden pedir cambios una vez recibido el pedido?</h2>
            <p>No, una vez recibido no se puede reenviar, en caso de necesitar algún cambio el mismo tendrá un costo extra, por eso pedimos que aclaren todo al momento de hacer la compra y ANTES de recibir su archivo. </p>
            <p>En <strong>invitaciones digitales</strong> pedimos que no pasen los datos hasta no estar seguros del horario y dirección del evento ya que un mínimo cambio puede significar tener que armarla desde cero, por lo tanto, se cobrará un extra si la invitación ya fue enviada.</p>
            <p>Para DISEÑOS NUEVOS de invitaciones, donde el cliente no ve un ejemplo previo de como es la invitación, SI están permitidas hasta dos modificaciones luego de recibir el archivo, las modificaciones las hacemos en una sola tanda de cambios, luego de eso cualquier otra modificación llevará un costo extra. Asegurarse de pedir todo ANTES de que empecemos el proceso creativo, ya sean frases, música de fondo, colores o tonos, etc. también pueden enviar un ejemplo que les guste para guiarnos y asegurarnos que su invitación sea justo lo que esperaban.</p>
        </section>
        <section>
            <h2>¿Cómo envío los datos para editarlo?</h2>
            <p>Una vez confirmado el pago tendrá la opción de cargar los datos o seleccionar la opción “Datos pendientes”, en ese caso les llegará un mail/WhatsApp con el asunto/mensaje COMPRA PENDIENTE DE DATOS, con lo que necesitamos para avanzar con el envío del archivo.</p>
        </section>
        <section>
            <h2>¿Los kits se pueden editar?</h2>
            <p>No, por el momento únicamente hacemos pedidos personalizados.</p>
        </section>
        <section>
            <h2>¿Se puede pedir más de una invitación?</h2>
            <p>Los kits traen una invitación en archivo imprimible y en JPG para enviar por whatsapp, si por algún motivo necesita dos invitaciones iguales pero con diferente fecha u horario, puede abonar un costo extra mínimo para recibirlas.</p>
        </section>
        <section>
            <h2>¿Hacen envíos internacionales?</h2>
            <p>¡Por supuesto! Podes abonar a través de Paypal y recibir tu archivo en el mismo plazo, solo tener en cuenta que la franja horaria de atención puede variar. Los medios de envío son los mismos, E-mail y WhatsApp. Asegurate de agendar el numero completo de WhatsApp indicando formato internacional completo.</p>
        </section>
        <section>
            <h2>Otras consultas</h2>
            <p>Escribinos por WhatsApp o envianos un E-mail y te responderemos a la brevedad 😊.</p>
        </section>
    </div>
</template>

<style scoped>
h2 {
    color: rgb(136 163 226);
    font-size: 24px;
    font-weight: bold   ;
}
p {
    margin-bottom: 1.2rem;
}
</style>