kubectl -n gitlab-auth create secret docker-registry gitlab-auth \
--docker-server=https://registry.gitlab.com \
--docker-username=xxx \
--docker-password=xxx \
--docker-email=xxx
