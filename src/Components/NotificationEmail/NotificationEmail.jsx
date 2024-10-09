import "./NotificationEmail.scss";


export default function NotificationEmail() {

    return (
        <section className="emailContent">

            <span class="material-symbols-outlined">
                mail
            </span>
            <h1 className="titleNotification">Receba sempre nossas ofertas promoções exclusivas!</h1>


            <p className="mensagemEmail">
                Fique tranquilo! Nós não compartilhamos os seus dados e todas as comunicações estão de acordo com nossa política de privacidade.
            </p>
            <div className="inputContent">
                <label htmlFor="" for="e-mail" className="legendaInput">E-mail</label>
                <input type="text" id="e-mail" name="e-mail" className="inputEmail" placeholder="Seu e-mail..." />

                <label htmlFor="" for="number" className="legendaInput">Whatsapp</label>
                <input type="text" id="number" name="number" className="inputEmail" placeholder="Seu Whatsapp..." />

                <button className="buttonEmail"> Enviar </button>

            </div>




        </section>
    )

}