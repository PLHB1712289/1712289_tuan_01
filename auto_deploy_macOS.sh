echo "==================="
echo "= AUTO DEPLOY APP ="
echo "===================" 

# build app
npm run deploy

# commit & push github
git add .

read -p "What is your commit message: " commit_msg

git commit -m "$commit_msg"
git push

echo "Done!!"
