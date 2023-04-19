import axios from "axios";
import {baseUrl, PIPEDRIVE_API_TOKEN} from '../utils/config'

const params = { params: { api_token: PIPEDRIVE_API_TOKEN } }

export default class PersonApi {
    static async getAll() {
        const res = await axios.get(`${baseUrl}/persons`, params)
        return res.data.data;
    }
    
    static async postOne(person) {
        const res = await axios.post(`${baseUrl}/persons`, {   
            name : person.name,
            email: [{ value: person.email }],
            phone: [{ value: person.phone }],
            org_id: 2 // make new peson part of one organization
        },
        params
        )
        return res;
    }

    static async deleteOne(personId) {
        const res = await axios.delete(`${baseUrl}/persons/${personId}`, params)
        return res;
    }
}