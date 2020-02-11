#!/usr/bin/env bash

if grep -HiREn "debugger" ./app; then
  echo 'debug lines found in commit.  Aborting' >&2
  exit 1
fi