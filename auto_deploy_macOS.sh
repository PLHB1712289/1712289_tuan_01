echo "   ==================="
echo "   = AUTO DEPLOY APP ="
echo "   ===================" 

read -p "What is your commit message: " commit_msg

# build app
npm run deploy

# commit & push github
git add .
git commit -m "$commit_msg"
git push

echo "Done!!"
