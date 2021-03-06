
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('saved_songs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('saved_songs').insert([
        { id: 1, 
          spotify_track_id: 'asdfasdf', 
          user_id: 2, 
          song_name: "asdfasdf", 
          album_name: "asdfasdf", 
          duration_ms: 10000, 
          song_url: "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl?nd=1", 
          album_art: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee", 
          key:"C#", 
          mode: "Major", 
          time_signature: 4, 
          acousticness: 0.514, 
          danceability: 0.735, 
          energy: 0.578, 
          instrumentalness: 0.0902, 
          liveness: 0.159, 
          loudness: -11.840, 
          speechiness: 0.0461, 
          valence: 0.624, 
          tempo: 98.002},
          { id: 2, 
            spotify_track_id: 'asdfasdf', 
            user_id: 2, 
            song_name: "asdfasdf", 
            album_name: "asdfasdf", 
            duration_ms: 10000, 
            song_url: "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl?nd=1", 
            album_art: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee", 
            key:"C#", 
            mode: "Major", 
            time_signature: 4, 
            acousticness: 0.514, 
            danceability: 0.735, 
            energy: 0.578, 
            instrumentalness: 0.0902, 
            liveness: 0.159, 
            loudness: -11.840, 
            speechiness: 0.0461, 
            valence: 0.624, 
            tempo: 98.002},
          { id: 3, 
            spotify_track_id: 'asdfasdf', 
            user_id: 1, 
            song_name: "asdfasdf", 
            album_name: "asdfasdf", 
            duration_ms: 10000, 
            song_url: "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl?nd=1", 
            album_art: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee", 
            key:"C#", 
            mode: "Major", 
            time_signature: 4, 
            acousticness: 0.514, 
            danceability: 0.735, 
            energy: 0.578, 
            instrumentalness: 0.0902, 
            liveness: 0.159, 
            loudness: -11.840, 
            speechiness: 0.0461, 
            valence: 0.624, 
            tempo: 98.002},
            { id: 4, 
              spotify_track_id: 'asdfasdf', 
              user_id: 1, 
              song_name: "asdfasdf", 
              album_name: "asdfasdf", 
              duration_ms: 10000, 
              song_url: "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl?nd=1", 
              album_art: "https://i.scdn.co/image/966ade7a8c43b72faa53822b74a899c675aaafee", 
              key:"C#", 
              mode: "Major", 
              time_signature: 4, 
              acousticness: 0.514, 
              danceability: 0.735, 
              energy: 0.578, 
              instrumentalness: 0.0902, 
              liveness: 0.159, 
              loudness: -11.840, 
              speechiness: 0.0461, 
              valence: 0.624, 
              tempo: 98.002}
      ]);
    });
};
