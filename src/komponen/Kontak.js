/* eslint-disable import/no-anonymous-default-export */
export default function Kontak ()
{
    return(
        <div className="contact-info" id = "contact">
        <h1>contact me</h1>
        <h2>lorem ger vitae libero ac risus</h2>
        <form>
        <div className="controls">
            <input id="name" name="name" type="text" className="span5" placeholder="Name here.." /> 
            <input id="email" name="email" type="email" className="span5" placeholder="Email here.." />
        </div>
        <div className="controls">
            <textarea id="message" name="message" className="span10" placeholder="Message here.." rows={5} defaultValue={""} />
        </div>
        <div className="controls">
            <button id="contact-submit" type="submit" className="btn">Submit</button>
        </div>
        </form>
    </div>
    )
}