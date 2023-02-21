set -e
 
npm run build

cd ./dist

git init
git add -A
git commit -m 'deploy'
git branch -M main

git push -f git@github.com:guoxq971/guoxq971.github.io.git main