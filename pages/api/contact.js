import axios from 'axios'

const sendMessage = async (message) => {
    try{
        const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.TG_OWNER_ID}&disable_web_page_preview=true&parse_mode=markdown&text=${message}`
        await axios.get(url)
        return {status: 'success'}
    }catch(err){
        console.log(err);
        return {status: 'failed', error: err.message}
    }
}

export default async function tg(req, res) {
    res.status(200).json(await sendMessage(req.query.text));
}