def count_words(text):
    return len(text.split())

def count_characters(text):
    return len(text)

if __name__ == "__main__":
    sample = "Infinity Developer is learning Python!"
    print("Words:", count_words(sample))
    print("Characters:", count_characters(sample))
