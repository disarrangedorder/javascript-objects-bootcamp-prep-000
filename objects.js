var playlist = {
  Slowdive: "Like a Prayer",
  My Bloody Valentine: "Second Sun",
  Phil Oohs: "Another Song"
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = songTitle
  return playlist
}

updatePlaylist(playlist, "Eagles", "Hotel California")
console.log(playlist)
