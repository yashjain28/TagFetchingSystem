function sendTags(req, resp){
        function callback(err, data){
                if (err) {
            resp.error("you have anror: "+err);
        }
        else {
            resp.success(data);
        }
        
        // then resp.success or resp.error
    }
    data = ["hello", "world", "yash", "IoT", "Tech", "Care", "healthcare", "clearblade", "aaa","aab","aac", "aad", "abb","abc", "aaron", "Allsbrook","rob","reinold"];
    callback(null, data);
 
}