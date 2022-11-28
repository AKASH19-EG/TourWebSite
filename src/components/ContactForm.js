import "./ContactFormStyles.css"

function ContactForm(){
    return(
        <div className="form-container">
            <h1>Send a massage to Us!</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="E-mail" />
                <input placeholder="Subject" />
                <textarea placeholder="message" rows="4"></textarea>
                <button>Send message</button>
            </form>
        </div>
    )
}
export default ContactForm
