var playlist = {
  Slowdive: "Like a Prayer",
  Phil Oohs: "Another Song"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = songTitle
  return playlist
}

updatePlaylist(playlist, "Eagles", "Hotel California")
console.log(playlist)
