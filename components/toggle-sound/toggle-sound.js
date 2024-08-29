function toggleSound() {
    var video = document.getElementById('video');
    var button = document.getElementById('soundButton');
    var icon = button.querySelector('i');
    if (video.muted) {
        video.muted = false;
        // button.textContent = 'Mute';
        icon.classList.remove('fa-volume-xmark');
        icon.classList.add('fa-volume-high');
    } else {
        video.muted = true;
        // button.textContent = 'Unmute';
        icon.classList.remove('fa-volume-high');
        icon.classList.add('fa-volume-xmark');
    }
}