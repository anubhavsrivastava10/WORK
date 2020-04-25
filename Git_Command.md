# GIT Commands

### Why git and what git can do
Git is the most common used version of Control System. Git tracks the changes you make to the files so you have a record of what has been done and you can revert to specific version you need to.

Git makes the files easy to update. A group of people working on the same project and every one works on the same code so people can always work on the updated version of the code if everyone keeps on updating there code in real time.

#### Configuring Git
1. Install git locally and Goto Github and create an account
1. which should be Public and click create repository
1. copy the HTTPS URL of repo ( https://github.com/......  )
1. Goto terminal or Command Prompt and change directory to the desktop 
1. git clone https://github.com/......... as to clone as a local repo 
1. Change directory to that folder
1. create a test.py file on desktop/folder_name
1. git config user.email "email_id"
1. git config user.name "user_name"

#### Example to understand the concept 
1. git add test.py 
1. git commit -m "Added new file"
1. git status #whether it is nothing to commit
1. git push
1. Goto github.com and refresh your page to see the test.py

#### Uploading old files at once
1. Add all the files in the new folder
1. git add --all
1. git commit -m "Adding all files"
1. git status
1. git push
1. Goto github.com and refresh your page to see all the files

#### Adding a new files
1. git add <filename>
1. git commit -m "Added new file"
1. git status #whether it is nothing to commit
1. git push
1. Goto github.com and refresh your page to see all the new file added

#### Making changes to the existing file
1. git pull
1. Edit locally 
1. git add test.py 
1. git commit -m "Did some changes"
1. git push

#### Merge Conflicts needs to be solved
If you make changes to a line and you git pull the code it will show the conflict in the lines letting you know the place where changes in your remote file and your file.
This needs to be resolved manually.
1. Open Locally and edit
1. remove all <<<<<, ====== and >>>>>> and solve the error
1. git add <filename>
1. git commit -m "Fix Merge Conflict"
1. git push

#### Git log 
Gives the history of every commit made.
Command : git log

#### Git reset
Consider a situation where you made the change to the code and you no longer feel like keeping the change you can always go back to the previous version of the code.
**Command**: git reset --hard<_commit hash value_>

#### What is a Pull Request?
If you make a change to the open source and consider that your work shows better result then you create a _pull request_, this gives the admin a chance to look at the changes and then decide whether to keep the change or discard it.