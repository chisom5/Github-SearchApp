const input = document.getElementById("user-Search");

input.addEventListener("input", (e) => {
    let githubUserName = e.target.value;
    // console.log(githubUserName);

    // using fetch api to get the user
    fetch(`https://api.github.com/users/${githubUserName}`)
        .then(response => response.json())
        .then(json => {
            // console.log(json);
            if (json.message === 'Not Found') {
                document.getElementById('username').innerText = 'User Not Found';
            } else {
                document.getElementById('username').innerText = json.login;
                document.getElementById('real-name').innerText = json.name;
                document.getElementById('avatar').setAttribute('src', json.avatar_url);
                document.getElementById('location').innerText = json.location;
                document.getElementById('bio').innerText = json.bio;
                document.getElementById('html-url').setAttribute('href', json.html_url);
                document.getElementById('followers').innerText = json.followers;
            }
        })

    //api call for the followers:
    fetch(`https://api.github.com/users/${githubUserName}/followers`)
        .then(response => response.json())
        .then(followers => {
            // console.log(followers)

            for (let i = 0; i < followers.length; i++) {
                const followersPanel = document.getElementById('followers-panel');
                // followersPanel.style.display = 'inline-Block';
                let followerDetails = document.createElement('div');
                let followerLink = document.createElement('a');
                let followerName = document.createElement('p');
                let followerAvatar = document.createElement('img');

                followerName.innerText = followers[i].login;
                followerLink.setAttribute('href', followers[i].html_url);
                followerLink.setAttribute('target', '_blank');
                followerAvatar.setAttribute('src', followers[i].avatar_url);

                // append all to the follower pannel
                followersPanel.appendChild(followerDetails);
                followerDetails.appendChild(followerLink);
                followerLink.appendChild(followerName);
                followerLink.appendChild(followerAvatar);
            }
        })

});