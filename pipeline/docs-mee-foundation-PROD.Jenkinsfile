pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
               dir("source") {
                    echo 'Building ...'
                    sh '''
                        # mdbook build .
                    '''
                }
            }
        }

        stage('Publish gh-pages') {
            steps {
               dir("source") {
                    //see https://github.com/rust-lang/mdBook/wiki/Automated-Deployment%3A-GitHub-Pages
                    echo 'Publish gh-pages'
                    sshagent (credentials: ['mee-ci']) {
                    sh """
                        git config --global user.email "devops@getmee.org"
                        git config --global user.name "Devops"

                        git worktree add ../pages gh-pages
                        rm -rf ../pages/* # this won't delete the .git directory
                        cp -rp book/* ../pages/
                        cp -rp CNAME ../pages/CNAME
                        cd ../pages
                        echo "version: $BUILD_NUMBER" > .version
                        git add -A
                        git commit -m "Deploy new version: $BUILD_NUMBER"
                        git push origin gh-pages
                        cd -
                    """
                    }
                }
            }
        }
    }
}
