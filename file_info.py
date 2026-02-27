import os

def file_size(path):
    try:
        size = os.path.getsize(path)
        return f"{size} bytes"
    except FileNotFoundError:
        return "File not found"

if __name__ == "__main__":
    print(file_size("calculator.py"))
