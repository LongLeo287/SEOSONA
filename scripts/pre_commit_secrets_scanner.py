#!/usr/bin/env python3
import sys
import re
import subprocess

PATTERNS = {
    "AWS API Key": r"AKIA[0-9A-Z]{16}",
    "Anthropic API Key": r"sk-ant-api03-[A-Za-z0-9\-_]{93}-AA",
    "OpenAI API Key": r"sk-[a-zA-Z0-9]{48}",
    "Generic Password": r"(?i)(password|passwd|pwd)[\s:=]+['\"][^'\"]{6,}['\"]",
    "Private Key": r"-----BEGIN (RSA|OPENSSH) PRIVATE KEY-----",
    "Supabase Key": r"sbp_[a-zA-Z0-9]{36}",
    "HuggingFace Token": r"hf_[a-zA-Z0-9]{34}",
    "Replicate Token": r"r8_[a-zA-Z0-9]{37}"
}

def get_staged_files():
    try:
        res = subprocess.run(["git", "diff", "--cached", "--name-only"], capture_output=True, text=True, check=True)
        return [line.strip() for line in res.stdout.splitlines() if line.strip()]
    except Exception as e:
        print(f"Error checking staged files: {e}")
        return []

def main():
    staged_files = get_staged_files()
    if not staged_files:
        sys.exit(0)

    found_threats = []
    for fpath in staged_files:
        try:
            with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                content = f.read()
                for threat_name, pattern in PATTERNS.items():
                    if re.search(pattern, content):
                        found_threats.append(f"{threat_name} in {fpath}")
        except Exception:
            pass

    if found_threats:
        print("\n\033[41m\033[97m[CRITICAL SECURITY ALERT]\033[0m OSF Scanner blocked commit due to leaked secrets:")
        for t in found_threats:
            print(f"    - {t}")
        print("\nPlease remove the secret credentials before committing.\n")
        sys.exit(1)

    print("\033[92m[OSF CLEAN]\033[0m Zero-Trust secrets scanner passed.")
    sys.exit(0)

if __name__ == "__main__":
    main()
