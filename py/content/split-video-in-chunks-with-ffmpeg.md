# Split video in chunks with FFmpeg

	$ ffmpeg -i input.mp4 -c copy -map 0 -segment_time 00:10:00 -f segment -reset_timestamps 1 output_%03d.mp4

adjust `-segment_time`
