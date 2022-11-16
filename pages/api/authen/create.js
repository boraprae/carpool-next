//http://localhost:3000/api/authen/create?password=1111
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    if(req.method == "GET") {
        const raw = req.query.password;
        const hash = await bcrypt.hash(raw, 10);
        return res.send(hash);
    }
    res.status(400).send("Method not allowed");
}