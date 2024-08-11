# Defining Imports
import edge_tts
import asyncio
import os
from playsound import playsound


# Defining the async function
async def _generate_tts(text:str, output_file="tmp/output.mp3", voice="en-US-AriaNeural") -> None:

    communicate = edge_tts.Communicate(text, voice)
    await communicate.save(output_file)


# Defining the tts_female function
def tts_female(text, voice="en-US-AriaNeural") -> None:

    '''
        tts_female takes in a `str` input and provides 
        a tts output using the `edge_tts` module
    '''

    output_file = "tmp/output.mp3"
    
    # Check if there's an existing event loop
    try:
        loop = asyncio.get_running_loop()
    except RuntimeError:  # No event loop is running
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
    
    # Run the async function using the event loop
    loop.run_until_complete(_generate_tts(text, output_file, voice))
    
    # Play the audio file and remove once played
    playsound(output_file)
    os.remove(output_file)


if __name__ == "__main__":

    tts_female("Hello, this is a test of the text-to-speech functionality.")
