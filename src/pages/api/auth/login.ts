import type {NextApiRequest, NextApiResponse} from 'next'

async function delay(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, time);
    });
}

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    await console.log(req.body);
    await delay(4000);
    await res.status(200).json({msg: "Success"})
}