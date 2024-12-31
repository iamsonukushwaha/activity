

const textarea = document.querySelector('#feed-textarea > ul');

const date = new Date();
document.querySelector('#date').innerHTML = date.toDateString();

var url = 'https://github.com/iamsonukushwaha.atom'





feednami.load(url, function (result) {
    if (result.error) {
        console.log(result.error)
    }
    else {
        var entries = result.feed.entries
        for (var i = 0; i < entries.length; i++) {
            var entry = entries[i]

           

            let li = document.createElement('li');
           

            //add HTML content to list items
            li.innerHTML = `<h4><a href="${entry.link}"> ${entry.title}</a></h4>`;
            


            //append HTML content to list 
            textarea.appendChild(li);
            
        }
    }
})
