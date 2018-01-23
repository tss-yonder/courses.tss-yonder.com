require 'rake'
require 'date'
require 'yaml'
require 'html-proofer'

CONFIG = YAML.load(File.read('_config.yml'))

namespace :site do
  desc "Test the website"
  task :test do
    options = {
      :allow_hash_href => true,
      :check_html => true,
      :check_external_hash => false,
      :disable_external => true,
    }
    begin
      HTMLProofer.check_directory("_site", options).run
    rescue => error_message
      puts "#{error_message}"
    end
  end

end
