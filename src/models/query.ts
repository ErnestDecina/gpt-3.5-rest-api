/**
 * 
 * query.ts
 * desc:
 * 
 * Author: Ernest John Decina
 */

class queryResponseJson {
    session_id: number 
    time_sent: number
    user_query: string
    assistant_response: string

    constructor(session_id: number, time_sent: number, user_query: string, assistant_response: string) {
        this.session_id = session_id
        this.time_sent = time_sent
        this.user_query = user_query
        this.assistant_response = assistant_response
    } // End constructor



    createJson(): object {
        return {
            "sessionId": this.session_id,
            "timeSent": this.time_sent,
            "data": {
                "user": {
                    "query": this.user_query,
                },
                "assistant": {
                    "response": this.assistant_response
                }
            },
        }
    } // End createJson
} // End class queryJson

class jwtQueryResponseJson {
    token: string 

    constructor(token: string) {
        this.token = token
    } // End constructor

    createJson(): object {

        return {
            "token": null
        }
    } // End createJson
} // End class queryJson

export {
    queryResponseJson
}