import string
import unicodedata

def piggify_word(word):


    # If word is empty string
    if len(word) == 0:
        return ''

    # If word[0] is capitalized make word[0] lowercase
    capital = not word[0].islower()
    if capital:
        word = word[0].lower() + word[1:]

    # Initialize vowels
    vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    # If word has no vowels return word
    zeros = [0]*len(word)
    b=[]
    for i in range(len(word)):
        if word[i] in vowels:
            b.append(1)
        else:
            b.append(0)
    if b == zeros:
        new_word = word
    else:

        # If word starts with a vowel return word + "way"
        if word[0] in vowels:
            new_word = word + "way"
        else:

            # Take characters up to the first vowel,
            # move them to the end, add "ay"
            for k in range(1,len(word)):
                if word[k] in vowels:
                    new_word = word[k] + word[k+1:] + word[:k] + "ay"
                    break
                else:
                    k +=1

    # If word[0] was capitalized make word[0] uppercase
    if capital:
        new_word = new_word[0].upper() + new_word[1:]

    # Return
    return new_word

def isValidCharacter(char):

    return char in string.ascii_letters


def piggify(string):

    # Normalize text into friendly unicode
    string = unicodedata.normalize('NFD', string.decode('utf-8'))

    # Determine start mode
    if isValidCharacter(string[0]):
        mode = 'word'
    else:
        mode = 'whitespace'

    page = ""
    i = 0
    while i < len(string):

        # Collect word until whitespace is hit
        word = ''
        while mode == 'word':
            if i >= len(string):
                break
            char = string[i]
            if isValidCharacter(char):
                word += char
                i += 1
            else:
                mode = 'whitespace'

        # Add piggified word to page
        a = piggify_word(word)
        page += a

        # Collect whitespace until word is hit
        while mode == 'whitespace':
            if i >= len(string):
                break
            char = string[i]
            if not isValidCharacter(char):
                # Add whitespace to page
                page += char
                i += 1
            else:
                mode = "word"

    # Return ascii text
    return page.encode()

if __name__=='__main__':
    import doctest
    doctest.testmod()
    main()
