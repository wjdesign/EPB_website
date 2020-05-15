#!/bin/bash
rsync -avl --delete /web/layout/EPB_website0/ /web/layout/EPB_website/ --exclude=.svn --exclude=_notes --exclude=.git --exclude=git_rsync.sh