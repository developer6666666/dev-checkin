# Description

Given a directory, check every file in the directory, sub-directory and so on if it contains a keyword, \
if contains log the file path.

# Input Parameter

findKeyword(path, keyword)

path: Directory path. Type: string. Example: 'src'. Default: 'src'\
keyword: Target keyword. Type: string. Example: 'TODO'. Default: 'TODO'

# Usage

findKeyword('src')\

Output:\
[\
  'src/dir1/dir1.1/dir1.1.1/f3.js',\
  'src/dir1/dir1.1/dir1.1.1/f5.js',\
  'src/dir1/dir1.1/f1.js',\
  'src/dir1/dir1.1/f2.js',\
  'src/dir1/dir1.2/f5.js'\
]

# TEST

npm test
